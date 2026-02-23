import { useState } from 'react'

import { Canvas } from './components/shared/Canvas'
import { LinkedList } from './components/LinkedList'
import { InputField } from './components/shared/InputField'
import { SharedButton } from './components/shared/SharedButton'


const linkedList = LinkedList()

function App() {
  const { add, remove, getIndex } = linkedList

  const [value, setValue] = useState("")
  const [renderState, setRenderState] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onAdd = () => {
    if (value === "") return
    add(parseInt(value))
    setValue("")
    setRenderState(prev => prev + 1)
  }

  const onRemove = () => {
    if (value === "") return
    console.log("this is remove value", value)
    remove(parseInt(value))
    setValue("")
    setRenderState(prev => prev + 1)

  }

  const onGetIndex = () => {
    if (value === "") return
    let index = getIndex(parseInt(value))
    setValue("")
    setRenderState(prev => prev + 1)
    alert(index)
  }

  return (
    <div className="relative w-full h-full flex">
      {/* Sidebar Control Panel */}
      <div className="w-72 h-full z-10 flex-shrink-0">
        <div className="glass-panel h-full px-6 py-8 flex flex-col gap-8 border-r border-white/10">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold tracking-tight glow-text bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Linked List Visualizer
            </h1>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em]">
              Data Structure Experience
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-6">
            {/* Add Node Section */}
            <div className="flex flex-col gap-3">
              <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Add Node
              </label>
              <InputField
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={onChange}
              />
              <SharedButton onClick={onAdd} className="w-full">
                Push Node
              </SharedButton>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Remove Node Section */}
            <div className="flex flex-col gap-3">
              <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Remove Node
              </label>
              <InputField
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={onChange}
              />
              <SharedButton onClick={onRemove} className="w-full">
                Remove Node
              </SharedButton>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Get Index
              </label>
              <InputField
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={onChange}
              />
              <SharedButton onClick={onGetIndex} className="w-full">
                Get Index
              </SharedButton>
            </div>
          </div>

          {/* Footer Status - pushed to bottom */}
          <div className="mt-auto">
            <div className="glass-panel px-4 py-2 rounded-full border-white/5">
              <p className="text-[10px] text-zinc-500 font-mono text-center">
                STATUS: STRUCTURE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 pointer-events-auto">
          <Canvas data={linkedList.getHead()} key={renderState} />
        </div>
      </div>
    </div>
  )
}


export default App
