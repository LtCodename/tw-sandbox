import {
    Action as ReduxAction,
    createStore,
    Store,
} from 'redux';

export type Action<Type, Meta = void> = ReduxAction<Type> & { meta?: Meta; };

export type PayloadAction<Type, Payload, Meta = void> =
    Action<Type, Meta> & { readonly payload: Payload; };

// export const createAction = <Type extends string, Meta>(
//     type: Type,
//     meta?: Meta,
// ): Action<Type, Meta> => ({ type, meta });

// export const createPayloadAction = <Type extends string, Payload>(
//     type: Type,
//     payload: Payload,
// ): PayloadAction<Type, Payload> => ({ type, payload });

export interface IAppStore {
    accessToken: string | null;
}

export enum IAppActionTypes {
    SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
}

export type ISetAccessToken = PayloadAction<IAppActionTypes.SET_ACCESS_TOKEN, string>;
// export type IRemoveToken = Action<IAppActionTypes.REMOVE_TOKEN>;

type IAppActions = ISetAccessToken;

// export const Actions = {
//     removeToken: () => createAction(IAppActionTypes.REMOVE_TOKEN),
//     setAccessTokenToStore: (accessToken: string) => (
//         createPayloadAction(IAppActionTypes.SET_ACCESS_TOKEN, accessToken)
//     ),
// };

const initialState: IAppStore = {
    accessToken: null,
};

const appReducer = (state = initialState, action: IAppActions): IAppStore => {
    switch (action.type) {
        case IAppActionTypes.SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload };
        default:
            return state;
    }
};

export const store: Store<IAppStore> = createStore(appReducer);

(window as any).__store = store;
