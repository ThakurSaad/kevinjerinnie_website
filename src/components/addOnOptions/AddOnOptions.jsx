const AddOnOptions = () => {
  return (
    <div className="responsive-base-width mx-auto mt-20  ">
      <div className="  overflow-hidden">
        <div className="text-center py-6 ">
          <h2 className="text-3xl font-bold ">Add-On Options</h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-blue-300 text-center">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500 text-white text-center">
                <th className="px-6 py-4  text-lg font-semibold text-center border-r border-blue-300">
                  Add-On Feature
                </th>
                <th className="px-6 py-4 text-center text-lg font-semibold">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className=" border-b  border-blue-300">
                <td className="px-6 py-4 text-gray-800 font-medium border-r border-blue-300">
                  Extra Voice Options
                </td>
                <td className="px-6 py-4 text-center text-gray-800 font-medium">
                  +$1.00/video
                </td>
              </tr>

              <tr className=" border-b border-blue-300">
                <td className="px-6 py-4 text-gray-800 font-medium border-r border-blue-300">
                  AI Avatar Presenter
                </td>
                <td className="px-6 py-4 text-center text-gray-800 font-medium">
                  +$2.00/video
                </td>
              </tr>

              <tr className=" border-b border-blue-300">
                <td className="px-6 py-4 text-gray-800 font-medium border-r border-blue-300">
                  SEO + Analytics Report
                </td>
                <td className="px-6 py-4 text-center text-gray-800 font-medium">
                  +$1.50/video
                </td>
              </tr>

              <tr className=" ">
                <td className="px-6 py-4 text-gray-800 font-medium border-r border-blue-300">
                  Caption Themes + Emojis Pack
                </td>
                <td className="px-6 py-4 text-center text-gray-800 font-medium">
                  +$0.99/video
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 px-6 py-4 text-center  border-blue-300">
          <p className=" text-sm">
            <span className="font-semibold text-blue-600">Bonus Offer:</span>{' '}
            Get 5 videos for just $25 — Save more with bundles
          </p>
        </div>
      </div>
    </div>
  )
}

export default AddOnOptions
