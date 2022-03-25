export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dq3f5s2h1/upload'
    const formData = new FormData();
    formData.append('upload_preset', 'lomchas')
    formData.append('file', file)

    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })

    const cloudResponse = await resp.json();

    console.log(cloudResponse)

    return cloudResponse.secure_url
}