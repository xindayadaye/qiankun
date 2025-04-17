import mitt, { type Emitter } from 'mitt'

interface StateType {
  [key: string]: any
}

class Actions {
  private state: StateType = {}
  private emitter

  constructor() {
    this.emitter = mitt()
  }

  getState<T>(key?: string): T {
    return key ? this.state[key] : this.state
  }

  emit<T>(emitKey: string, emitParam: T): void {
    this.state = { ...this.state, [emitKey]: emitParam }
    return this.emitter.emit(emitKey, emitParam)
  }

  on<T>(emitKey: string, handler: (payload: T) => void) {
    return this.emitter.on(emitKey, handler as (payload?: unknown) => void)
  }
  //   清除单个监听
  off(emitKey: string): void {
    this.emitter.off(emitKey)
  }
  //   清除全部监听
  clearAll(): void {
    this.emitter.all.clear()
  }
}

export default new Actions()
