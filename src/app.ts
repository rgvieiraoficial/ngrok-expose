import ngrok from "ngrok";

async function expose() {
  const port = (process.argv[2]) ? Number(process.argv[2]) : 8080;

  const url = await ngrok.connect(port);

  return url;
}

expose().then((url: string) => {
  console.log(url);
});