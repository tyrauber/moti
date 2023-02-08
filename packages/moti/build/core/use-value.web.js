import { useMemo } from 'react';
export function useValue(getter, deps) {
    return useMemo(() => ({
        value: getter(),
    }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps);
}
//# sourceMappingURL=use-value.web.js.map