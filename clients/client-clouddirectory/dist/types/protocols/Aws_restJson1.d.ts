import { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "../commands/AddFacetToObjectCommand";
import { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "../commands/ApplySchemaCommand";
import { AttachObjectCommandInput, AttachObjectCommandOutput } from "../commands/AttachObjectCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "../commands/AttachPolicyCommand";
import { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "../commands/AttachToIndexCommand";
import { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "../commands/AttachTypedLinkCommand";
import { BatchReadCommandInput, BatchReadCommandOutput } from "../commands/BatchReadCommand";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "../commands/BatchWriteCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "../commands/CreateDirectoryCommand";
import { CreateFacetCommandInput, CreateFacetCommandOutput } from "../commands/CreateFacetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import { CreateObjectCommandInput, CreateObjectCommandOutput } from "../commands/CreateObjectCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "../commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "../commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "../commands/DeleteDirectoryCommand";
import { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "../commands/DeleteFacetCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "../commands/DeleteObjectCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "../commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "../commands/DetachFromIndexCommand";
import { DetachObjectCommandInput, DetachObjectCommandOutput } from "../commands/DetachObjectCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "../commands/DetachPolicyCommand";
import { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "../commands/DetachTypedLinkCommand";
import { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "../commands/DisableDirectoryCommand";
import { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "../commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "../commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "../commands/GetDirectoryCommand";
import { GetFacetCommandInput, GetFacetCommandOutput } from "../commands/GetFacetCommand";
import { GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput } from "../commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "../commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "../commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "../commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "../commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "../commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "../commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "../commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "../commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "../commands/ListFacetAttributesCommand";
import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "../commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "../commands/ListIncomingTypedLinksCommand";
import { ListIndexCommandInput, ListIndexCommandOutput } from "../commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "../commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "../commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "../commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "../commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "../commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "../commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "../commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "../commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "../commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "../commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "../commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "../commands/LookupPolicyCommand";
import { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "../commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput } from "../commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "../commands/RemoveFacetFromObjectCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "../commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "../commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "../commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "../commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "../commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "../commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "../commands/UpgradePublishedSchemaCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AddFacetToObjectCommand: (
  input: AddFacetToObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ApplySchemaCommand: (
  input: ApplySchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1AttachObjectCommand: (
  input: AttachObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1AttachPolicyCommand: (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1AttachToIndexCommand: (
  input: AttachToIndexCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1AttachTypedLinkCommand: (
  input: AttachTypedLinkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchReadCommand: (
  input: BatchReadCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchWriteCommand: (
  input: BatchWriteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDirectoryCommand: (
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateFacetCommand: (
  input: CreateFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateIndexCommand: (
  input: CreateIndexCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateObjectCommand: (
  input: CreateObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateSchemaCommand: (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateTypedLinkFacetCommand: (
  input: CreateTypedLinkFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDirectoryCommand: (
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteFacetCommand: (
  input: DeleteFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteObjectCommand: (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteSchemaCommand: (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteTypedLinkFacetCommand: (
  input: DeleteTypedLinkFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DetachFromIndexCommand: (
  input: DetachFromIndexCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DetachObjectCommand: (
  input: DetachObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DetachPolicyCommand: (
  input: DetachPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DetachTypedLinkCommand: (
  input: DetachTypedLinkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisableDirectoryCommand: (
  input: DisableDirectoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1EnableDirectoryCommand: (
  input: EnableDirectoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAppliedSchemaVersionCommand: (
  input: GetAppliedSchemaVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDirectoryCommand: (
  input: GetDirectoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetFacetCommand: (
  input: GetFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetLinkAttributesCommand: (
  input: GetLinkAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetObjectAttributesCommand: (
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetObjectInformationCommand: (
  input: GetObjectInformationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSchemaAsJsonCommand: (
  input: GetSchemaAsJsonCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetTypedLinkFacetInformationCommand: (
  input: GetTypedLinkFacetInformationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAppliedSchemaArnsCommand: (
  input: ListAppliedSchemaArnsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAttachedIndicesCommand: (
  input: ListAttachedIndicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDevelopmentSchemaArnsCommand: (
  input: ListDevelopmentSchemaArnsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDirectoriesCommand: (
  input: ListDirectoriesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListFacetAttributesCommand: (
  input: ListFacetAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListFacetNamesCommand: (
  input: ListFacetNamesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListIncomingTypedLinksCommand: (
  input: ListIncomingTypedLinksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListIndexCommand: (
  input: ListIndexCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListManagedSchemaArnsCommand: (
  input: ListManagedSchemaArnsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListObjectAttributesCommand: (
  input: ListObjectAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListObjectChildrenCommand: (
  input: ListObjectChildrenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListObjectParentPathsCommand: (
  input: ListObjectParentPathsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListObjectParentsCommand: (
  input: ListObjectParentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListObjectPoliciesCommand: (
  input: ListObjectPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListOutgoingTypedLinksCommand: (
  input: ListOutgoingTypedLinksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListPolicyAttachmentsCommand: (
  input: ListPolicyAttachmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListPublishedSchemaArnsCommand: (
  input: ListPublishedSchemaArnsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTypedLinkFacetAttributesCommand: (
  input: ListTypedLinkFacetAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTypedLinkFacetNamesCommand: (
  input: ListTypedLinkFacetNamesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1LookupPolicyCommand: (
  input: LookupPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PublishSchemaCommand: (
  input: PublishSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutSchemaFromJsonCommand: (
  input: PutSchemaFromJsonCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RemoveFacetFromObjectCommand: (
  input: RemoveFacetFromObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateFacetCommand: (
  input: UpdateFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateLinkAttributesCommand: (
  input: UpdateLinkAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateObjectAttributesCommand: (
  input: UpdateObjectAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateSchemaCommand: (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateTypedLinkFacetCommand: (
  input: UpdateTypedLinkFacetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpgradeAppliedSchemaCommand: (
  input: UpgradeAppliedSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpgradePublishedSchemaCommand: (
  input: UpgradePublishedSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AddFacetToObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddFacetToObjectCommandOutput>;
export declare const deserializeAws_restJson1ApplySchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ApplySchemaCommandOutput>;
export declare const deserializeAws_restJson1AttachObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachObjectCommandOutput>;
export declare const deserializeAws_restJson1AttachPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachPolicyCommandOutput>;
export declare const deserializeAws_restJson1AttachToIndexCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachToIndexCommandOutput>;
export declare const deserializeAws_restJson1AttachTypedLinkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachTypedLinkCommandOutput>;
export declare const deserializeAws_restJson1BatchReadCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchReadCommandOutput>;
export declare const deserializeAws_restJson1BatchWriteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchWriteCommandOutput>;
export declare const deserializeAws_restJson1CreateDirectoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDirectoryCommandOutput>;
export declare const deserializeAws_restJson1CreateFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateFacetCommandOutput>;
export declare const deserializeAws_restJson1CreateIndexCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateIndexCommandOutput>;
export declare const deserializeAws_restJson1CreateObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateObjectCommandOutput>;
export declare const deserializeAws_restJson1CreateSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateSchemaCommandOutput>;
export declare const deserializeAws_restJson1CreateTypedLinkFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTypedLinkFacetCommandOutput>;
export declare const deserializeAws_restJson1DeleteDirectoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDirectoryCommandOutput>;
export declare const deserializeAws_restJson1DeleteFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteFacetCommandOutput>;
export declare const deserializeAws_restJson1DeleteObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteObjectCommandOutput>;
export declare const deserializeAws_restJson1DeleteSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSchemaCommandOutput>;
export declare const deserializeAws_restJson1DeleteTypedLinkFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteTypedLinkFacetCommandOutput>;
export declare const deserializeAws_restJson1DetachFromIndexCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachFromIndexCommandOutput>;
export declare const deserializeAws_restJson1DetachObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachObjectCommandOutput>;
export declare const deserializeAws_restJson1DetachPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachPolicyCommandOutput>;
export declare const deserializeAws_restJson1DetachTypedLinkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachTypedLinkCommandOutput>;
export declare const deserializeAws_restJson1DisableDirectoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisableDirectoryCommandOutput>;
export declare const deserializeAws_restJson1EnableDirectoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableDirectoryCommandOutput>;
export declare const deserializeAws_restJson1GetAppliedSchemaVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAppliedSchemaVersionCommandOutput>;
export declare const deserializeAws_restJson1GetDirectoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDirectoryCommandOutput>;
export declare const deserializeAws_restJson1GetFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetFacetCommandOutput>;
export declare const deserializeAws_restJson1GetLinkAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetLinkAttributesCommandOutput>;
export declare const deserializeAws_restJson1GetObjectAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectAttributesCommandOutput>;
export declare const deserializeAws_restJson1GetObjectInformationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectInformationCommandOutput>;
export declare const deserializeAws_restJson1GetSchemaAsJsonCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSchemaAsJsonCommandOutput>;
export declare const deserializeAws_restJson1GetTypedLinkFacetInformationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTypedLinkFacetInformationCommandOutput>;
export declare const deserializeAws_restJson1ListAppliedSchemaArnsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAppliedSchemaArnsCommandOutput>;
export declare const deserializeAws_restJson1ListAttachedIndicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAttachedIndicesCommandOutput>;
export declare const deserializeAws_restJson1ListDevelopmentSchemaArnsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDevelopmentSchemaArnsCommandOutput>;
export declare const deserializeAws_restJson1ListDirectoriesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDirectoriesCommandOutput>;
export declare const deserializeAws_restJson1ListFacetAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListFacetAttributesCommandOutput>;
export declare const deserializeAws_restJson1ListFacetNamesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListFacetNamesCommandOutput>;
export declare const deserializeAws_restJson1ListIncomingTypedLinksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListIncomingTypedLinksCommandOutput>;
export declare const deserializeAws_restJson1ListIndexCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListIndexCommandOutput>;
export declare const deserializeAws_restJson1ListManagedSchemaArnsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListManagedSchemaArnsCommandOutput>;
export declare const deserializeAws_restJson1ListObjectAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectAttributesCommandOutput>;
export declare const deserializeAws_restJson1ListObjectChildrenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectChildrenCommandOutput>;
export declare const deserializeAws_restJson1ListObjectParentPathsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectParentPathsCommandOutput>;
export declare const deserializeAws_restJson1ListObjectParentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectParentsCommandOutput>;
export declare const deserializeAws_restJson1ListObjectPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectPoliciesCommandOutput>;
export declare const deserializeAws_restJson1ListOutgoingTypedLinksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListOutgoingTypedLinksCommandOutput>;
export declare const deserializeAws_restJson1ListPolicyAttachmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPolicyAttachmentsCommandOutput>;
export declare const deserializeAws_restJson1ListPublishedSchemaArnsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPublishedSchemaArnsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1ListTypedLinkFacetAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTypedLinkFacetAttributesCommandOutput>;
export declare const deserializeAws_restJson1ListTypedLinkFacetNamesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTypedLinkFacetNamesCommandOutput>;
export declare const deserializeAws_restJson1LookupPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<LookupPolicyCommandOutput>;
export declare const deserializeAws_restJson1PublishSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PublishSchemaCommandOutput>;
export declare const deserializeAws_restJson1PutSchemaFromJsonCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutSchemaFromJsonCommandOutput>;
export declare const deserializeAws_restJson1RemoveFacetFromObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveFacetFromObjectCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateFacetCommandOutput>;
export declare const deserializeAws_restJson1UpdateLinkAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateLinkAttributesCommandOutput>;
export declare const deserializeAws_restJson1UpdateObjectAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateObjectAttributesCommandOutput>;
export declare const deserializeAws_restJson1UpdateSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSchemaCommandOutput>;
export declare const deserializeAws_restJson1UpdateTypedLinkFacetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateTypedLinkFacetCommandOutput>;
export declare const deserializeAws_restJson1UpgradeAppliedSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpgradeAppliedSchemaCommandOutput>;
export declare const deserializeAws_restJson1UpgradePublishedSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpgradePublishedSchemaCommandOutput>;
