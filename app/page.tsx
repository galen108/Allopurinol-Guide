"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Info, FileText, Heart, Brain } from 'lucide-react';

interface Section {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
}

interface ExpandableCardProps {
    id: string;
    title: string;
    children: React.ReactNode;
    variant?: 'default' | 'warning' | 'info' | 'success';
}

export default function AllopurinolGuide() {
    const [activeSection, setActiveSection] = useState('overview');
    const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

    const toggleCard = (cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    const sections: Section[] = [
        { id: 'overview', label: 'Overview', icon: Info },
        { id: 'approved', label: 'Approved Uses', icon: FileText },
        { id: 'safety', label: 'Safety Considerations', icon: AlertTriangle },
        { id: 'evidence', label: 'Clinical Evidence', icon: Heart },
        { id: 'access', label: 'Getting Access', icon: FileText },
        { id: 'advocacy', label: 'Patient Advocacy', icon: Brain }
    ];

    const ExpandableCard: React.FC<ExpandableCardProps> = ({ id, title, children, variant = 'default' }) => {
        const isExpanded = expandedCards[id];
        const variantStyles = {
            default: 'bg-white border-slate-200',
            warning: 'bg-amber-50 border-amber-200',
            info: 'bg-blue-50 border-blue-200',
            success: 'bg-emerald-50 border-emerald-200'
        };

        return (
            <div className={`border rounded-lg overflow-hidden ${variantStyles[variant]}`}>
                <button
                    onClick={() => toggleCard(id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-70 transition-colors"
                >
                    <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {isExpanded && (
                    <div className="px-6 pb-4 pt-2">
                        {children}
                    </div>
                )}
            </div>
        );
    };

    const renderOverview = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-3">Obtaining Allopurinol Without a Gout Diagnosis</h2>
                <p className="text-blue-50 leading-relaxed">
                    To obtain an allopurinol prescription through Kaiser Permanente without a gout diagnosis,
                    your mother would generally need to have another approved medical indication or receive an
                    &quot;off-label&quot; prescription from a Kaiser physician.
                </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Points</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Allopurinol requires clinical justification beyond general wellness</span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Multiple approved uses exist beyond gout treatment</span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Safety monitoring is essential, especially for seniors</span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Off-label access is possible but may require documentation</span>
                    </li>
                </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Info size={18} className="mr-2" />
                    Next Step
                </h4>
                <p className="text-blue-800">
                    Your mother should schedule an appointment with her Kaiser primary care physician to discuss
                    her uric acid levels and why she believes allopurinol would be beneficial for her specific health profile.
                </p>
            </div>
        </div>
    );

    const renderApprovedUses = () => (
        <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Approved Non-Gout Uses</h2>
                <p className="text-slate-600 mb-6">
                    While allopurinol is most famous for treating gout, it is also standard therapy for several other conditions.
                </p>

                <div className="space-y-4">
                    <ExpandableCard id="kidney-stones" title="Recurrent Kidney Stones">
                        <p className="text-slate-700">
                            Specifically calcium oxalate or uric acid stones in patients with high uric acid levels.
                            This is a well-established indication where allopurinol can help prevent stone formation
                            by reducing uric acid production.
                        </p>
                    </ExpandableCard>

                    <ExpandableCard id="chemo" title="Chemotherapy Support">
                        <p className="text-slate-700">
                            Preventing tumor lysis syndrome (elevated uric acid from dying cancer cells). When cancer
                            cells break down rapidly during treatment, they release large amounts of uric acid that
                            can damage kidneys. Allopurinol helps prevent this complication.
                        </p>
                    </ExpandableCard>

                    <ExpandableCard id="hyperuricemia" title="Hyperuricemia">
                        <p className="text-slate-700">
                            Treating high blood uric acid levels even without joint pain, typically when they are causing
                            other metabolic issues. This indication is more nuanced and requires documentation of how
                            elevated uric acid is affecting overall health.
                        </p>
                    </ExpandableCard>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Kaiser Permanente Prescription Policies</h3>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Clinical Necessity</h4>
                        <p className="text-slate-700">
                            Kaiser physicians generally follow established clinical guidelines. Most medical professionals
                            avoid prescribing allopurinol for &quot;asymptomatic hyperuricemia&quot; (high uric acid with no symptoms)
                            unless it is associated with other specific problems.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Off-Label Prescribing</h4>
                        <p className="text-slate-700">
                            Doctors have the legal authority to prescribe drugs &quot;off-label&quot; for conditions not specifically
                            FDA-approved if they believe it is clinically beneficial. However, within the Kaiser system,
                            coverage for off-label or non-formulary uses often requires a formulary exception submitted
                            by the doctor based on medical necessity.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Formulary Restrictions</h4>
                        <p className="text-slate-700">
                            Kaiser&apos;s 2025 formulary includes allopurinol, but it may require prior authorization to ensure
                            it is being used for a covered medical purpose. If prescribed for a reason Kaiser does not cover
                            (like purely &quot;preventative&quot; health without a diagnosis), she might be responsible for the full
                            retail cost at the pharmacy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSafety = () => (
        <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-6">
                <div className="flex items-start mb-4">
                    <AlertTriangle className="text-amber-600 mr-3 flex-shrink-0" size={24} />
                    <h2 className="text-2xl font-bold text-amber-900">Important Safety Considerations</h2>
                </div>
                <p className="text-amber-800 mb-4">
                    Allopurinol is not a supplement and carries risks that a physician must evaluate.
                </p>
            </div>

            <div className="space-y-4">
                <ExpandableCard id="severe-reactions" title="Severe Reactions" variant="warning">
                    <p className="text-slate-700 mb-3">
                        About 2% of people develop hypersensitivity reactions, which can include life-threatening
                        conditions like Stevens-Johnson Syndrome (SJS).
                    </p>
                    <div className="bg-white rounded p-4 border border-amber-200">
                        <h5 className="font-semibold text-slate-800 mb-2">Risk Factors:</h5>
                        <ul className="space-y-1 text-slate-700">
                            <li>• Older adults (especially those in their 70s)</li>
                            <li>• Impaired kidney function</li>
                            <li>• Certain genetic predispositions</li>
                            <li>• Starting at high doses</li>
                        </ul>
                    </div>
                </ExpandableCard>

                <ExpandableCard id="monitoring" title="Required Monitoring" variant="warning">
                    <p className="text-slate-700 mb-3">
                        Long-term use requires regular lab tests to monitor kidney function, liver health, and blood counts.
                    </p>
                    <div className="bg-white rounded p-4 border border-amber-200">
                        <h5 className="font-semibold text-slate-800 mb-2">Typical Monitoring Schedule:</h5>
                        <ul className="space-y-1 text-slate-700">
                            <li>• Baseline kidney function (GFR) before starting</li>
                            <li>• Liver enzymes at 1-3 months after starting</li>
                            <li>• Periodic uric acid level checks</li>
                            <li>• Annual comprehensive metabolic panel</li>
                        </ul>
                    </div>
                </ExpandableCard>

                <ExpandableCard id="genetic-testing" title="Genetic Testing" variant="warning">
                    <p className="text-slate-700 mb-3">
                        For certain ethnic groups (e.g., Han Chinese, Thai, or African descent), screening for the
                        HLA-B*58:01 allele is recommended before starting to avoid severe skin reactions.
                    </p>
                    <div className="bg-white rounded p-4 border border-amber-200">
                        <p className="text-slate-700">
                            Individuals carrying this genetic marker are hundreds of times more likely to have a fatal
                            reaction to allopurinol. Testing can prevent these life-threatening complications.
                        </p>
                    </div>
                </ExpandableCard>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                    <AlertTriangle size={18} className="mr-2" />
                    Critical for Seniors
                </h4>
                <p className="text-red-800">
                    For individuals in their 70s, it is important to have kidney function (GFR) assessed before
                    starting allopurinol. Impaired kidney function can affect how the body processes the medication
                    and increase the risk of toxic buildup.
                </p>
            </div>
        </div>
    );

    const renderEvidence = () => (
        <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Clinical Evidence for Non-Gout Uses</h2>
                <p className="text-slate-600 mb-6">
                    The xanthine oxidase pathway (which allopurinol inhibits) is linked to oxidative stress and
                    inflammation. However, the medical community&apos;s consensus on using it for &quot;everything&quot; is not yet reached.
                </p>

                <div className="space-y-4">
                    <ExpandableCard id="heart-health" title="Heart Health" variant="info">
                        <p className="text-slate-700 mb-3">
                            While small studies were promising, the massive ALL-HEART trial (2022) found that allopurinol
                            did not improve heart attack or stroke outcomes in patients over 60 who did not have gout.
                        </p>
                        <div className="bg-white rounded p-4 border border-blue-200">
                            <p className="text-slate-700 text-sm">
                                This large-scale trial tempered initial enthusiasm about cardiovascular benefits, though
                                it doesn&apos;t rule out benefits in specific subpopulations or for other metabolic effects.
                            </p>
                        </div>
                    </ExpandableCard>

                    <ExpandableCard id="kidney-diabetes" title="Diabetes and Kidney Disease" variant="success">
                        <p className="text-slate-700 mb-3">
                            There is strong evidence it may help prevent kidney failure in diabetic patients, and some
                            doctors use it for this &quot;off-label&quot; purpose.
                        </p>
                        <div className="bg-white rounded p-4 border border-emerald-200">
                            <p className="text-slate-700 text-sm">
                                This represents one of the more promising areas of research, with multiple studies showing
                                potential benefits for preserving kidney function in chronic kidney disease.
                            </p>
                        </div>
                    </ExpandableCard>

                    <ExpandableCard id="psychiatric" title="Bipolar and Autism" variant="info">
                        <p className="text-slate-700 mb-3">
                            Small trials suggest it might help as an adjunct (additional) treatment for mania, but it
                            is not yet a standard first-line treatment for these conditions.
                        </p>
                        <div className="bg-white rounded p-4 border border-blue-200">
                            <h5 className="font-semibold text-slate-800 mb-2">Research Findings:</h5>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>
                                    <strong>Bipolar Mania:</strong> Multiple meta-analyses and randomized trials show that
                                    adding allopurinol to standard mood stabilizers (like lithium) can significantly reduce
                                    manic symptoms.
                                </li>
                                <li>
                                    <strong>Autism Spectrum Disorder:</strong> Research indicates it may improve cognitive
                                    skills and adaptive behavior in certain individuals, particularly by reducing oxidative
                                    stress and modulating neurotransmission.
                                </li>
                                <li>
                                    <strong>Potential Benefit:</strong> For someone who has struggled with the side effects
                                    of traditional antipsychotics or lithium, allopurinol represents a lower-toxicity
                                    alternative or supplement that addresses a root metabolic pathway.
                                </li>
                            </ul>
                        </div>
                    </ExpandableCard>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h4 className="font-semibold text-blue-900 mb-2">Why Approval Is Required</h4>
                <p className="text-blue-800 mb-3">
                    The primary reason doctors do not prescribe allopurinol as a universal &quot;health booster&quot; is the
                    risk of life-threatening side effects, particularly in older adults.
                </p>
                <ul className="space-y-2 text-blue-800">
                    <li>• Severe hypersensitivity (AHS) can be fatal</li>
                    <li>• Adults in their 70s are at much higher risk</li>
                    <li>• Natural kidney function decline can cause toxic buildup</li>
                    <li>• Benefits must outweigh significant risks</li>
                </ul>
            </div>
        </div>
    );

    const renderAccess = () => (
        <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Getting Access via Kaiser Permanente</h2>
                <p className="text-slate-600 mb-6">
                    Kaiser is a &quot;managed care&quot; system, meaning they strictly follow evidence-based guidelines to
                    ensure patient safety and cost-effectiveness.
                </p>

                <div className="space-y-4">
                    <ExpandableCard id="off-label-coverage" title="Off-Label Coverage">
                        <p className="text-slate-700">
                            If a doctor prescribes it for a reason not listed by the FDA (like general inflammation),
                            Kaiser may require a prior authorization or a formulary exception. The physician must
                            document why the medication is medically necessary for the specific condition being treated.
                        </p>
                    </ExpandableCard>

                    <ExpandableCard id="cost" title="Cost Considerations">
                        <div className="space-y-3">
                            <p className="text-slate-700">
                                Allopurinol is a very inexpensive generic drug. If Kaiser refuses to cover it because she
                                lacks a &quot;qualifying diagnosis,&quot; your mom can still ask for a paper prescription and use a
                                discount service (like GoodRx) at a standard pharmacy, where it often costs less than
                                $10–$20 per month.
                            </p>
                            <div className="bg-emerald-50 rounded p-4 border border-emerald-200">
                                <h5 className="font-semibold text-emerald-900 mb-2">Affordable Options:</h5>
                                <ul className="space-y-1 text-emerald-800">
                                    <li>• GoodRx coupons: $5-15/month typically</li>
                                    <li>• Costco pharmacy: Often lowest cash price</li>
                                    <li>• Generic manufacturers: Multiple options available</li>
                                </ul>
                            </div>
                        </div>
                    </ExpandableCard>

                    <ExpandableCard id="medical-necessity" title="Documenting Medical Necessity">
                        <div className="space-y-3">
                            <p className="text-slate-700">
                                The key for your mom&apos;s access is to have her doctor document a medical necessity—such as
                                high uric acid levels (hyperuricemia) or specific inflammatory markers—rather than requesting
                                it for general wellness.
                            </p>
                            <div className="bg-blue-50 rounded p-4 border border-blue-200">
                                <h5 className="font-semibold text-blue-900 mb-2">Documentation That May Help:</h5>
                                <ul className="space-y-1 text-blue-800">
                                    <li>• Lab results showing elevated uric acid levels</li>
                                    <li>• History of kidney stones or kidney disease</li>
                                    <li>• Documented inflammatory conditions</li>
                                    <li>• Failed trials of other medications</li>
                                    <li>• Specific metabolic markers of concern</li>
                                </ul>
                            </div>
                        </div>
                    </ExpandableCard>
                </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Strategy for Access</h3>
                <ol className="space-y-2 text-emerald-50">
                    <li>1. Request comprehensive metabolic panel including uric acid levels</li>
                    <li>2. Document any relevant symptoms or conditions</li>
                    <li>3. Discuss specific health concerns with primary care physician</li>
                    <li>4. Have doctor submit prior authorization if needed</li>
                    <li>5. Consider cash payment option if coverage is denied</li>
                </ol>
            </div>
        </div>
    );

    const renderAdvocacy = () => (
        <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-3">Patient Advocacy and System Issues</h2>
                <p className="text-slate-200">
                    The frustration you feel reflects a significant tension between clinical research and standard
                    medical practice. Your experience highlights serious issues regarding diagnostic delays and the
                    potential benefits of allopurinol beyond gout.
                </p>
            </div>

            <div className="space-y-4">
                <ExpandableCard id="diagnostic-delays" title="Diagnostic Delays and Institutional Oversight" variant="warning">
                    <div className="space-y-3">
                        <p className="text-slate-700">
                            A 10-year delay in gout diagnosis despite presenting symptoms is a documented issue within
                            large healthcare systems.
                        </p>
                        <div className="bg-white rounded p-4 border border-amber-200">
                            <h5 className="font-semibold text-slate-800 mb-2">Systemic Critiques:</h5>
                            <ul className="space-y-2 text-slate-700">
                                <li>
                                    • Kaiser Permanente has faced regulatory fines and legal scrutiny specifically for delays
                                    in care
                                </li>
                                <li>
                                    • Prioritization of administrative metrics over patient satisfaction in some departments
                                </li>
                                <li>
                                    • Critics and whistleblowers have alleged cost-containment through &quot;risk-adjustment&quot;
                                </li>
                                <li>
                                    • Sometimes inadequate staffing in mental health and specialty services
                                </li>
                            </ul>
                        </div>
                    </div>
                </ExpandableCard>

                <ExpandableCard id="psychiatric-adjunct" title="Allopurinol as a Psychiatric Adjunct" variant="info">
                    <div className="space-y-3">
                        <p className="text-slate-700">
                            Scientific literature does support the observation that allopurinol may have a role in
                            psychiatric stability, particularly through the purinergic pathway.
                        </p>
                        <div className="bg-white rounded p-4 border border-blue-200">
                            <h5 className="font-semibold text-slate-800 mb-3">Evidence Summary:</h5>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium text-slate-800 mb-1">Bipolar Mania</p>
                                    <p className="text-slate-700 text-sm">
                                        Multiple meta-analyses and randomized trials show that adding allopurinol to standard
                                        mood stabilizers (like lithium) can significantly reduce manic symptoms.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800 mb-1">Autism Spectrum Disorder</p>
                                    <p className="text-slate-700 text-sm">
                                        Research indicates it may improve cognitive skills and adaptive behavior in certain
                                        individuals, particularly by reducing oxidative stress and modulating neurotransmission.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800 mb-1">Lower-Toxicity Alternative</p>
                                    <p className="text-slate-700 text-sm">
                                        For someone who has struggled with the side effects of traditional antipsychotics or
                                        lithium, allopurinol represents a lower-toxicity alternative or supplement that addresses
                                        a root metabolic pathway.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ExpandableCard>

                <ExpandableCard id="filing-grievances" title="Filing Grievances and External Review">
                    <div className="space-y-3">
                        <p className="text-slate-700">
                            If you believe your mother is being denied necessary care or that your own diagnosis was
                            unfairly delayed, you have several avenues for recourse.
                        </p>
                        <div className="bg-slate-50 rounded p-4 border border-slate-200 space-y-4">
                            <div>
                                <h5 className="font-semibold text-slate-800 mb-2">Internal Grievance Process:</h5>
                                <ul className="space-y-1 text-slate-700 text-sm">
                                    <li>• File a formal grievance through Kaiser Permanente Member Services</li>
                                    <li>• Request a peer-to-peer review with a specialist</li>
                                    <li>• Document all communications and delays</li>
                                    <li>• Request written explanations for denials</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold text-slate-800 mb-2">External Review Options:</h5>
                                <ul className="space-y-1 text-slate-700 text-sm">
                                    <li>• Contact the California Department of Managed Health Care (DMHC)</li>
                                    <li>• File an independent medical review request</li>
                                    <li>• Consider consulting a patient advocacy organization</li>
                                    <li>• Seek second opinions from non-Kaiser physicians</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ExpandableCard>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5">
                <h4 className="font-semibold text-blue-900 mb-2">Your Rights as a Patient</h4>
                <ul className="space-y-2 text-blue-800">
                    <li>• Right to timely access to care</li>
                    <li>• Right to a second opinion</li>
                    <li>• Right to participate in treatment decisions</li>
                    <li>• Right to file complaints without retaliation</li>
                    <li>• Right to access your complete medical records</li>
                </ul>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Allopurinol Prescription Guide
                    </h1>
                    <p className="text-slate-600 mt-2">
                        Comprehensive information about accessing allopurinol through Kaiser Permanente
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex overflow-x-auto gap-1 py-3">
                        {sections.map(section => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                                        activeSection === section.id
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span className="font-medium">{section.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {activeSection === 'overview' && renderOverview()}
                {activeSection === 'approved' && renderApprovedUses()}
                {activeSection === 'safety' && renderSafety()}
                {activeSection === 'evidence' && renderEvidence()}
                {activeSection === 'access' && renderAccess()}
                {activeSection === 'advocacy' && renderAdvocacy()}
            </div>

            {/* Footer */}
            <div className="bg-slate-800 text-white mt-12">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Important Reminder</h3>
                            <p className="text-slate-300 text-sm">
                                This information is for educational purposes only and should not replace professional
                                medical advice. Always consult with a qualified healthcare provider before starting any
                                new medication.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Resources</h3>
                            <ul className="space-y-2 text-slate-300 text-sm">
                                <li>• Kaiser Permanente Member Services</li>
                                <li>• California Department of Managed Health Care (DMHC)</li>
                                <li>• Patient advocacy organizations</li>
                                <li>• Your primary care physician</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm">
                        <p>Always prioritize open communication with your healthcare provider</p>
                    </div>
                </div>
            </div>
        </div>
    );
}