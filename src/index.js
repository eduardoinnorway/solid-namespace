// Namespaces we commonly use and have acommon prefixes for around solid

var solidNameSpace = {}

var $rdf = require('rdflib')

// This used to be a faw function (no ".expand" but that caused the module exports all to be dropped)
solidNameSpace.expand = function (prefixed) {
  var pair = prefixed.split(':')
  if (pair.length === 0) throw new Error('Prefixed name has no colon: ' + prefixed)
  if (!(pair[0] in solidNameSpace)) throw new Error('Unregistered namespace prefix in: ' + prefixed)
  return solidNameSpace[pair[0]](pair[1])
}

solidNameSpace.auth = $rdf.Namespace('http://www.w3.org/ns/auth/acl#') // @@ obsolete - use acl:
solidNameSpace.acl = $rdf.Namespace('http://www.w3.org/ns/auth/acl#')
solidNameSpace.arg = $rdf.Namespace('http://www.w3.org/ns/pim/arg#')
solidNameSpace.cal = $rdf.Namespace('http://www.w3.org/2002/12/cal/ical#')
solidNameSpace.contact = $rdf.Namespace('http://www.w3.org/2000/10/swap/pim/contact#')
solidNameSpace.dc = $rdf.Namespace('http://purl.org/dc/elements/1.1/')
solidNameSpace.dct = $rdf.Namespace('http://purl.org/dc/terms/')
solidNameSpace.doap = $rdf.Namespace('http://usefulinc.com/ns/doap#')
solidNameSpace.foaf = $rdf.Namespace('http://xmlns.com/foaf/0.1/')
solidNameSpace.http = $rdf.Namespace('http://www.w3.org/2007/ont/http#')
solidNameSpace.httph = $rdf.Namespace('http://www.w3.org/2007/ont/httph#')
solidNameSpace.icalTZ = $rdf.Namespace('http://www.w3.org/2002/12/cal/icaltzd#') // Beware: not cal:
solidNameSpace.ldp = $rdf.Namespace('http://www.w3.org/ns/ldp#')
solidNameSpace.link = solidNameSpace.tab = solidNameSpace.tabont = $rdf.Namespace('http://www.w3.org/2007/ont/link#')
solidNameSpace.log = $rdf.Namespace('http://www.w3.org/2000/10/swap/log#')
solidNameSpace.meeting = $rdf.Namespace('http://www.w3.org/ns/pim/meeting#')
solidNameSpace.mo = $rdf.Namespace('http://purl.org/ontology/mo/')
solidNameSpace.owl = $rdf.Namespace('http://www.w3.org/2002/07/owl#')
solidNameSpace.pad = $rdf.Namespace('http://www.w3.org/ns/pim/pad#')
solidNameSpace.patch = $rdf.Namespace('http://www.w3.org/ns/pim/patch#')
solidNameSpace.qu = $rdf.Namespace('http://www.w3.org/2000/10/swap/pim/qif#')
solidNameSpace.trip = $rdf.Namespace('http://www.w3.org/ns/pim/trip#')
solidNameSpace.rdf = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
solidNameSpace.rdfs = $rdf.Namespace('http://www.w3.org/2000/01/rdf-schema#')
solidNameSpace.rss = $rdf.Namespace('http://purl.org/rss/1.0/')
solidNameSpace.sched = $rdf.Namespace('http://www.w3.org/ns/pim/schedule#')
solidNameSpace.schema = $rdf.Namespace('http:/schema.org/') // @@ beware confusion with documents no 303
solidNameSpace.sioc = $rdf.Namespace('http://rdfs.org/sioc/ns#')
// was - solidNameSpace.xsd = $rdf.Namespace('http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#dt-')
solidNameSpace.solid = $rdf.Namespace('http://www.w3.org/ns/solid/terms#')
solidNameSpace.space = $rdf.Namespace('http://www.w3.org/ns/pim/space#')
solidNameSpace.stat = $rdf.Namespace('http://www.w3.org/ns/posix/stat#')
solidNameSpace.ui = $rdf.Namespace('http://www.w3.org/ns/ui#')
solidNameSpace.vcard = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#')
solidNameSpace.wf = $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#')
solidNameSpace.xsd = $rdf.Namespace('http://www.w3.org/2001/XMLSchema#')

module.exports = solidNameSpace