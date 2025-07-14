import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const ModelScript = () => {
  const [selectedModel, setSelectedModel] = useState('')
  const [scriptText, setScriptText] = useState('')
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const models = [
    'GPT-4 Video',
    'Claude Video Pro',
    'Gemini Video',
    'LLaMA Video',
  ]

  const handleGenerate = async () => {
    if (!selectedModel || !scriptText.trim()) {
      alert('Please select a model and enter a script description')
      return
    }

    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
    alert('Video generation started! Check your dashboard for progress.')
  }

  return (
    <div className=" mx-auto   ">
      <div className="rounded-lg  mt-5 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-600">
            Model
          </label>
          <div className="relative">
            <button
              onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
              className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-blue-400 transition-colors"
            >
              <span
                className={selectedModel ? 'text-gray-900' : 'text-gray-500'}
              >
                {selectedModel || 'Select a model...'}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isModelDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isModelDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {models.map((model) => (
                  <button
                    key={model}
                    onClick={() => {
                      setSelectedModel(model)
                      setIsModelDropdownOpen(false)
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {model}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-600">
            Script to Video
          </label>
          <textarea
            value={scriptText}
            onChange={(e) => setScriptText(e.target.value)}
            placeholder="Enter text to describe the content you want to create..."
            className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg resize-none focus:outline-none focus:border-blue-500 transition-colors"
            rows={8}
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !selectedModel || !scriptText.trim()}
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
              isGenerating || !selectedModel || !scriptText.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
            }`}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModelScript
