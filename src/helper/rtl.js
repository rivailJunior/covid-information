export function mockWindow () {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    writable: true,
    configurable: true,
    value: {
      assign: jest.fn(),
    },
  });
}