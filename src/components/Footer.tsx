export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 md:py-16 text-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Conference Host */}
          <div className="space-y-6 text-white/80">
            <h3 className="text-xl text-white font-bold mb-4">Conference Host</h3>
            <p>
              Australasian eResearch Organisations (AeRO) Inc is the industry association focused on eResearch in Australasia.
            </p>
            <p>
              We play a critical coordination role for our members, who are actively transforming research via Information Technology.
            </p>
            <p>
              Organisations join AeRO to advance their own capabilities and services, to collaborate, and to network with peers.
            </p>
            <p>
              AeRO believes researchers and the sector significantly benefit from greater communication, coordination and sharing among the increasingly different and evolving service providers
            </p>
            <p>
              <a href="https://www.aero.edu.au" className="hover:underline">www.aero.edu.au</a>
            </p>
            <p>
              <a href="#" className="hover:underline">Past Abstract Archive</a>
            </p>
          </div>

          {/* Conference Managers */}
          <div className="space-y-6 text-white/80">
            <h3 className="text-xl text-white font-bold mb-4">Conference Managers</h3>
            <p>
              Please contact the team at Conference Design with any questions regarding the conference.
            </p>
            <p>
              mail@conferencedesign.com.au<br />
              +61 3 6231 2999<br />
              <a href="https://www.conferencedesign.com.au" className="hover:underline">www.conferencedesign.com.au</a>
            </p>
            <div className="pt-8">
              <img 
                src="https://conference.eresearch.edu.au/wp-content/uploads/2019/06/Conference-DesignFOOTER.png" 
                alt="Conference Design" 
                className="max-w-[200px]"
              />
            </div>
          </div>

          {/* Links & Acknowledgement */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl text-white font-bold mb-4 uppercase">Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:underline">Code of Conduct</a></li>
                <li><a href="#" className="hover:underline">Conference Contributor Policy</a></li>
                <li><a href="#" className="hover:underline">Privacy and Data Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-white font-bold mb-4 uppercase">Acknowledgement of Country</h3>
              <p className="text-white/80">
                We acknowledge the traditional owners of the land on which we meet and pay our respects to their Elders past, present and emerging.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
