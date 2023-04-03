var myHeaders = new Headers();
myHeaders.append(
    "Authorization",
    'OAuth oauth_consumer_key="nBDPplnYpNkQLETDPOUJ",oauth_token="rKtqgCJiBAQyQFWiPidhLrUvgvrHcDEVVFiqjIQa",oauth_signature_method="PLAINTEXT",oauth_timestamp="1680231915",oauth_nonce="dbTQKqheC7k",oauth_version="1.0",oauth_verifier="nyEmiclOsx",oauth_signature="zZbERSAsbZCpGoMNdjvcsZdnpYAlFhmi%26FhlWtFeTapRGrRHhGGujKMJxMCUXeEuZgdRWOwDz"'
);
myHeaders.append(
    "Cookie",
    "__cf_bm=ofDO3rebUGqFthLxfQXnlC2kj8vI26vOpyOk2WOwmRo-1680231879-0-ATrxgRKiQkLDYEiDrMd66W95Kb6pZyz0jvB30jHRaRT+RhiU8/hF1L3DqRRUW8ndR34F8aVe3nasgGLVhFj1oNY="
);

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};

fetch(
    "https://api.discogs.com/database/search?q=Nirvana&page=200&per_page=50",
    requestOptions
)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));