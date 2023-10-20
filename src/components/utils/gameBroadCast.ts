export class BroadCastSingleton {
  private static instance: BroadcastChannel;

  private constructor() {}

  public static getInstance(): BroadcastChannel {
    if (!BroadCastSingleton.instance) {
      BroadCastSingleton.instance = new BroadcastChannel("game");
    }

    return BroadCastSingleton.instance;
  }
}
