import { CustomerProfilesClient } from "./CustomerProfilesClient";
import { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "./commands/AddProfileKeyCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "./commands/DeleteProfileKeyCommand";
import { DeleteProfileObjectCommandInput, DeleteProfileObjectCommandOutput } from "./commands/DeleteProfileObjectCommand";
import { DeleteProfileObjectTypeCommandInput, DeleteProfileObjectTypeCommandOutput } from "./commands/DeleteProfileObjectTypeCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import { GetMatchesCommandInput, GetMatchesCommandOutput } from "./commands/GetMatchesCommand";
import { GetProfileObjectTypeCommandInput, GetProfileObjectTypeCommandOutput } from "./commands/GetProfileObjectTypeCommand";
import { GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput } from "./commands/GetProfileObjectTypeTemplateCommand";
import { ListAccountIntegrationsCommandInput, ListAccountIntegrationsCommandOutput } from "./commands/ListAccountIntegrationsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import { ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput } from "./commands/ListProfileObjectTypeTemplatesCommand";
import { ListProfileObjectTypesCommandInput, ListProfileObjectTypesCommandOutput } from "./commands/ListProfileObjectTypesCommand";
import { ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput } from "./commands/ListProfileObjectsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "./commands/MergeProfilesCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "./commands/PutProfileObjectCommand";
import { PutProfileObjectTypeCommandInput, PutProfileObjectTypeCommandOutput } from "./commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "./commands/SearchProfilesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <p>Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information
 *          about the Amazon Connect Customer Profiles API, including supported operations, data types,
 *          parameters, and schemas.</p>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has
 *          pre-built connectors powered by AppFlow that make it easy to combine customer information
 *          from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your
 *          enterprise resource planning (ERP), with contact history from your Amazon Connect contact
 *          center.</p>
 *          <p>If you're new to Amazon Connect , you might find it helpful to also review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html">Amazon Connect Administrator Guide</a>.</p>
 */
export declare class CustomerProfiles extends CustomerProfilesClient {
    /**
     * <p>Associates a new key value with a specific profile, such as a Contact Trace Record (CTR)
     *          ContactId.</p>
     *          <p>A profile object can have a single unique key and any number of additional keys that can
     *          be used to identify the profile that it belongs to.</p>
     */
    addProfileKey(args: AddProfileKeyCommandInput, options?: __HttpHandlerOptions): Promise<AddProfileKeyCommandOutput>;
    addProfileKey(args: AddProfileKeyCommandInput, cb: (err: any, data?: AddProfileKeyCommandOutput) => void): void;
    addProfileKey(args: AddProfileKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddProfileKeyCommandOutput) => void): void;
    /**
     * <p>Creates a domain, which is a container for all customer data, such as customer profile
     *          attributes, object types, profile keys, and encryption keys. You can create multiple
     *          domains, and each domain can have multiple third-party integrations.</p>
     *          <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can
     *          be associated with one domain.</p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>Creates a standard profile.</p>
     *          <p>A standard profile represents the following attributes for a customer profile in a
     *          domain.</p>
     */
    createProfile(args: CreateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileCommandOutput>;
    createProfile(args: CreateProfileCommandInput, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
    createProfile(args: CreateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a specific domain and all of its customer data, such as customer profile
     *          attributes and their related objects.</p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>Removes an integration from a specific domain.</p>
     */
    deleteIntegration(args: DeleteIntegrationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIntegrationCommandOutput>;
    deleteIntegration(args: DeleteIntegrationCommandInput, cb: (err: any, data?: DeleteIntegrationCommandOutput) => void): void;
    deleteIntegration(args: DeleteIntegrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIntegrationCommandOutput) => void): void;
    /**
     * <p>Deletes the standard customer profile and all data pertaining to the profile.</p>
     */
    deleteProfile(args: DeleteProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileCommandOutput>;
    deleteProfile(args: DeleteProfileCommandInput, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
    deleteProfile(args: DeleteProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
    /**
     * <p>Removes a searchable key from a customer profile.</p>
     */
    deleteProfileKey(args: DeleteProfileKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileKeyCommandOutput>;
    deleteProfileKey(args: DeleteProfileKeyCommandInput, cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void): void;
    deleteProfileKey(args: DeleteProfileKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void): void;
    /**
     * <p>Removes an object associated with a profile of a given ProfileObjectType.</p>
     */
    deleteProfileObject(args: DeleteProfileObjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileObjectCommandOutput>;
    deleteProfileObject(args: DeleteProfileObjectCommandInput, cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void): void;
    deleteProfileObject(args: DeleteProfileObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void): void;
    /**
     * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
     *          ProfileObjects of that type. It also disables integrations from this specific
     *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
     *          were populated from this ProfileObjectType.</p>
     */
    deleteProfileObjectType(args: DeleteProfileObjectTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileObjectTypeCommandOutput>;
    deleteProfileObjectType(args: DeleteProfileObjectTypeCommandInput, cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void): void;
    deleteProfileObjectType(args: DeleteProfileObjectTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific domain.</p>
     */
    getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
    getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
    getDomain(args: GetDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
    /**
     * <p>Returns an integration for a domain.</p>
     */
    getIntegration(args: GetIntegrationCommandInput, options?: __HttpHandlerOptions): Promise<GetIntegrationCommandOutput>;
    getIntegration(args: GetIntegrationCommandInput, cb: (err: any, data?: GetIntegrationCommandOutput) => void): void;
    getIntegration(args: GetIntegrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIntegrationCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and subject to change.</p>
     *          <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or
     *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
     *          enable identity resolution: set <code>Matching</code> to true.</p>
     *          <p>GetMatches returns potentially matching profiles, based on the results of the latest run
     *          of a machine learning process. </p>
     *          <important>
     *             <p>Amazon Connect runs a batch process every Saturday at 12AM UTC to identify matching profiles.
     *             The results are returned up to seven days after the Saturday run.</p>
     *          </important>
     *
     *          <p>Amazon Connect uses the following profile attributes to identify matches:</p>
     *          <ul>
     *             <li>
     *                <p>PhoneNumber</p>
     *             </li>
     *             <li>
     *                <p>HomePhoneNumber</p>
     *             </li>
     *             <li>
     *                <p>BusinessPhoneNumber</p>
     *             </li>
     *             <li>
     *                <p>MobilePhoneNumber</p>
     *             </li>
     *             <li>
     *                <p>EmailAddress</p>
     *             </li>
     *             <li>
     *                <p>PersonalEmailAddress</p>
     *             </li>
     *             <li>
     *                <p>BusinessEmailAddress</p>
     *             </li>
     *             <li>
     *                <p>FullName</p>
     *             </li>
     *             <li>
     *                <p>BusinessName</p>
     *             </li>
     *          </ul>
     */
    getMatches(args: GetMatchesCommandInput, options?: __HttpHandlerOptions): Promise<GetMatchesCommandOutput>;
    getMatches(args: GetMatchesCommandInput, cb: (err: any, data?: GetMatchesCommandOutput) => void): void;
    getMatches(args: GetMatchesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMatchesCommandOutput) => void): void;
    /**
     * <p>Returns the object types for a specific domain.</p>
     */
    getProfileObjectType(args: GetProfileObjectTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileObjectTypeCommandOutput>;
    getProfileObjectType(args: GetProfileObjectTypeCommandInput, cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void): void;
    getProfileObjectType(args: GetProfileObjectTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void): void;
    /**
     * <p>Returns the template information for a specific object type.</p>
     *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
     *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
     *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
     *          template.</p>
     */
    getProfileObjectTypeTemplate(args: GetProfileObjectTypeTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileObjectTypeTemplateCommandOutput>;
    getProfileObjectTypeTemplate(args: GetProfileObjectTypeTemplateCommandInput, cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void): void;
    getProfileObjectTypeTemplate(args: GetProfileObjectTypeTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void): void;
    /**
     * <p>Lists all of the integrations associated to a specific URI in the AWS account.</p>
     */
    listAccountIntegrations(args: ListAccountIntegrationsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountIntegrationsCommandOutput>;
    listAccountIntegrations(args: ListAccountIntegrationsCommandInput, cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void): void;
    listAccountIntegrations(args: ListAccountIntegrationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the domains for an AWS account that have been created.</p>
     */
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    /**
     * <p>Lists all of the integrations in your domain.</p>
     */
    listIntegrations(args: ListIntegrationsCommandInput, options?: __HttpHandlerOptions): Promise<ListIntegrationsCommandOutput>;
    listIntegrations(args: ListIntegrationsCommandInput, cb: (err: any, data?: ListIntegrationsCommandOutput) => void): void;
    listIntegrations(args: ListIntegrationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIntegrationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
     */
    listProfileObjects(args: ListProfileObjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProfileObjectsCommandOutput>;
    listProfileObjects(args: ListProfileObjectsCommandInput, cb: (err: any, data?: ListProfileObjectsCommandOutput) => void): void;
    listProfileObjects(args: ListProfileObjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfileObjectsCommandOutput) => void): void;
    /**
     * <p>Lists all of the templates available within the service.</p>
     */
    listProfileObjectTypes(args: ListProfileObjectTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListProfileObjectTypesCommandOutput>;
    listProfileObjectTypes(args: ListProfileObjectTypesCommandInput, cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void): void;
    listProfileObjectTypes(args: ListProfileObjectTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void): void;
    /**
     * <p>Lists all of the template information for object types.</p>
     */
    listProfileObjectTypeTemplates(args: ListProfileObjectTypeTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListProfileObjectTypeTemplatesCommandOutput>;
    listProfileObjectTypeTemplates(args: ListProfileObjectTypeTemplatesCommandInput, cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void): void;
    listProfileObjectTypeTemplates(args: ListProfileObjectTypeTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void): void;
    /**
     * <p>Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect
     *          Customer Profiles, domains, profile object types, and integrations can be tagged.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and subject to change.</p>
     *          <p>Runs an AWS Lambda job that does the following:</p>
     *          <ol>
     *             <li>
     *                <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the
     *                main profile.</p>
     *             </li>
     *             <li>
     *                <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main
     *                profile.</p>
     *             </li>
     *             <li>
     *                <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p>
     *             </li>
     *             <li>
     *                <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the
     *                main profile.</p>
     *             </li>
     *             <li>
     *                <p>Standard fields are merged as follows:</p>
     *                <ol>
     *                   <li>
     *                      <p>Fields are always "union"-ed if there are no conflicts in standard fields or
     *                      attributeKeys.</p>
     *                   </li>
     *                   <li>
     *                      <p>When there are conflicting fields:</p>
     *
     *                      <ol>
     *                         <li>
     *                            <p>If no <code>SourceProfileIds</code> entry is specified, the main
     *                            Profile value is always taken. </p>
     *                         </li>
     *                         <li>
     *                            <p>If a <code>SourceProfileIds</code> entry is specified, the specified
     *                            profileId is always taken, even if it is a NULL value.</p>
     *                         </li>
     *                      </ol>
     *                   </li>
     *                </ol>
     *             </li>
     *          </ol>
     *          <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which
     *          returns potentially matching profiles, or use it with the results of another matching
     *          system. After profiles have been merged, they cannot be separated (unmerged).</p>
     */
    mergeProfiles(args: MergeProfilesCommandInput, options?: __HttpHandlerOptions): Promise<MergeProfilesCommandOutput>;
    mergeProfiles(args: MergeProfilesCommandInput, cb: (err: any, data?: MergeProfilesCommandOutput) => void): void;
    mergeProfiles(args: MergeProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergeProfilesCommandOutput) => void): void;
    /**
     * <p>Adds an integration between the service and a third-party service, which includes
     *          Amazon AppFlow and Amazon Connect.</p>
     *          <p>An integration can belong to only one domain.</p>
     */
    putIntegration(args: PutIntegrationCommandInput, options?: __HttpHandlerOptions): Promise<PutIntegrationCommandOutput>;
    putIntegration(args: PutIntegrationCommandInput, cb: (err: any, data?: PutIntegrationCommandOutput) => void): void;
    putIntegration(args: PutIntegrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutIntegrationCommandOutput) => void): void;
    /**
     * <p>Adds additional objects to customer profiles of a given ObjectType.</p>
     *          <p>When adding a specific profile object, like a Contact Trace Record (CTR), an inferred
     *          profile can get created if it is not mapped to an existing profile. The resulting profile
     *          will only have a phone number populated in the standard ProfileObject. Any additional CTRs
     *          with the same phone number will be mapped to the same inferred profile.</p>
     *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
     *          ProfileObject, it will provide data to a standard profile depending on the
     *          ProfileObjectType definition.</p>
     *          <p>PutProfileObject needs an ObjectType, which can be created using
     *          PutProfileObjectType.</p>
     */
    putProfileObject(args: PutProfileObjectCommandInput, options?: __HttpHandlerOptions): Promise<PutProfileObjectCommandOutput>;
    putProfileObject(args: PutProfileObjectCommandInput, cb: (err: any, data?: PutProfileObjectCommandOutput) => void): void;
    putProfileObject(args: PutProfileObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutProfileObjectCommandOutput) => void): void;
    /**
     * <p>Defines a ProfileObjectType.</p>
     */
    putProfileObjectType(args: PutProfileObjectTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutProfileObjectTypeCommandOutput>;
    putProfileObjectType(args: PutProfileObjectTypeCommandInput, cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void): void;
    putProfileObjectType(args: PutProfileObjectTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void): void;
    /**
     * <p>Searches for profiles within a specific domain name using name, phone number, email
     *          address, account number, or a custom defined index.</p>
     */
    searchProfiles(args: SearchProfilesCommandInput, options?: __HttpHandlerOptions): Promise<SearchProfilesCommandOutput>;
    searchProfiles(args: SearchProfilesCommandInput, cb: (err: any, data?: SearchProfilesCommandOutput) => void): void;
    searchProfiles(args: SearchProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchProfilesCommandOutput) => void): void;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles
     *          resource. Tags can help you organize and categorize your resources. You can also use them
     *          to scope user permissions by granting a user permission to access or change only resources
     *          with certain tag values. In Connect Customer Profiles, domains, profile object types, and
     *          integrations can be tagged.</p>
     *          <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of
     *          characters.</p>
     *          <p>You can use the TagResource action with a resource that already has tags. If you specify
     *          a new tag key, this tag is appended to the list of tags associated with the resource. If
     *          you specify a tag key that is already associated with the resource, the new tag value that
     *          you specify replaces the previous value for that tag.</p>
     *          <p>You can associate as many as 50 tags with a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect
     *          Customer Profiles, domains, profile object types, and integrations can be tagged.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the properties of a domain, including creating or selecting a dead letter queue
     *          or an encryption key.</p>
     *          <p>After a domain is created, the name can’t be changed.</p>
     */
    updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
    updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
    updateDomain(args: UpdateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
    /**
     * <p>Updates the properties of a profile. The ProfileId is required for updating a customer
     *          profile.</p>
     *          <p>When calling the UpdateProfile API, specifying an empty string value means that any
     *          existing value will be removed. Not specifying a string value means that any value already
     *          there will be kept.</p>
     */
    updateProfile(args: UpdateProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileCommandOutput>;
    updateProfile(args: UpdateProfileCommandInput, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
    updateProfile(args: UpdateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
}
