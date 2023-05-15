import Papa from "papaparse";
import {ZodTypeAny, z} from "zod"

export const parseFile = <S extends ZodTypeAny>(files: FileList, rowSchema: S, resultCallback: (found: z.infer<S>[]) => void, errorCallback: (e: unknown) => void) => {
    Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        worker: true,
        error(error: Error, _file: unknown) {
            errorCallback(error)
        },
        complete: function(results) {
            try {
                const parsedRows: z.infer<S> = rowSchema.array().parse(results.data)
                resultCallback(parsedRows)
            } catch (e) {
                errorCallback(e)
            }
        }
    })
}

type Name = {
    name: string
}
export type MultiMatch = {
    name: string
    matchedNames: string[]
}

type IdMatch= {
    user_id: string,
    matchedName: string
}

type UserName = {
    firstname: string,
    lastname: string,
    user_id: string
}

export const matchNames = <T extends Name>(users: UserName[], names: T[]): {noMatch: string[], uniqueMatch: (IdMatch & T)[], multipleMatch: MultiMatch[]} => {
    type Match = IdMatch & T
    const uniqueMatch: Match[] =[]
    const multipleMatch: MultiMatch[] = []

    const noMatch: string[] = []
    for (const nameInfo of names) {
        const name = nameInfo.name
        let matched: Match[] = []
        let matchLevel = -1
        for (const u of users) {
            const firstLast = (u.firstname + " " + u.lastname)

            if (u.firstname === name) {
                if (matchLevel > 0) {
                    matched = []
                }
                matched.push({ ...nameInfo, user_id: u.user_id, matchedName: firstLast})
                matchLevel = 0
            }

            if (matchLevel === 0) {
                continue
            }

            if (firstLast === name) {
                matched.push({ ...nameInfo, user_id: u.user_id, matchedName: firstLast})
                if (matchLevel > 1) {
                    matched = []
                }
                matchLevel = 1
            }

            if (matchLevel === 1) {
                continue
            }
            const nameWithoutDot = name.replace('.', '')

            if (firstLast.includes(nameWithoutDot)) {
                matched.push({ ...nameInfo, user_id: u.user_id, matchedName: firstLast})
                matchLevel = 2
            }
        }
        if (matched.length === 0) {
            noMatch.push(name)
        } else if (matched.length === 1) {
            uniqueMatch.push(matched[0])
        } else {
            multipleMatch.push({name, matchedNames: matched.map(m => m.matchedName) })
        }

    }
    return {
        noMatch,
        uniqueMatch,
        multipleMatch
    }
}

export const exportCSV = (data: any, file_name: string) => {
    const csv = Papa.unparse(data)
    const blob = new Blob([csv]);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = file_name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}