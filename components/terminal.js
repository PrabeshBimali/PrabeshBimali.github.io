class Terminal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <div class="w-full bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-800">
        <div class="bg-slate-900 px-6 py-2 border-b border-slate-800">
          <div class="text-slate-500 font-mono text-[10px] tracking-widest uppercase">CONTACT DEV — bash — 1200x750</div>
        </div>

        <div class="p-8 font-mono text-emerald-400 min-h-[350px]">
          <div class="mb-6">
            <span class="text-cyan-400">dev@prabesh</span>
            <span class="text-emerald-400">:~$ fetch info --identity</span>
          </div>
          <div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-100">
            <div class="space-y-1">
              <p><span class="text-cyan-400 font-bold">NAME:</span> Prabesh Bimali</p>
              <p><span class="text-cyan-400 font-bold">LOCATION:</span> Jhapa, Nepal</p>
              <p><span class="text-cyan-400 font-bold">FOCUS:</span> Web Applications/APIs</p>
              <p><span class="text-cyan-400 font-bold">Email:</span> prabeshlord111@gmail.com</p>
              <p><span class="text-cyan-400 font-bold">Phone:</span> (+977) 9806080780</p>
            </div>
            <div class="opacity-40 text-slate-300 text-sm">
              <p>/* Status: Available For Work/Contract */</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-cyan-400">dev@prabesh</span>
            <span class="text-emerald-400">:~$</span>
            <span class="w-[1px] h-4 bg-emerald-400 animate-pulse"></span>
            <input disabled type="text" class="bg-inherit outline-none border-none">
          </div>

        </div>
      </div>
    `;
  }
}

customElements.define("terminal-window", Terminal);