import {
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
} from "../commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
} from "../commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommandInput, CreatePermissionCommandOutput } from "../commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
} from "../commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommandInput, DeletePermissionCommandOutput } from "../commands/DeletePermissionCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
} from "../commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
} from "../commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
} from "../commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "../commands/GetCertificateCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
} from "../commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommandInput, IssueCertificateCommandOutput } from "../commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "../commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "../commands/PutPolicyCommand";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
} from "../commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommandInput, RevokeCertificateCommandOutput } from "../commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
} from "../commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
} from "../commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
} from "../commands/UpdateCertificateAuthorityCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CreateCertificateAuthorityCommand: (
  input: CreateCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand: (
  input: CreateCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreatePermissionCommand: (
  input: CreatePermissionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteCertificateAuthorityCommand: (
  input: DeleteCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeletePermissionCommand: (
  input: DeletePermissionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeletePolicyCommand: (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeCertificateAuthorityCommand: (
  input: DescribeCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand: (
  input: DescribeCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCertificateCommand: (
  input: GetCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCertificateAuthorityCertificateCommand: (
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCertificateAuthorityCsrCommand: (
  input: GetCertificateAuthorityCsrCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetPolicyCommand: (
  input: GetPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ImportCertificateAuthorityCertificateCommand: (
  input: ImportCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1IssueCertificateCommand: (
  input: IssueCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListCertificateAuthoritiesCommand: (
  input: ListCertificateAuthoritiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListPermissionsCommand: (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsCommand: (
  input: ListTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutPolicyCommand: (
  input: PutPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RestoreCertificateAuthorityCommand: (
  input: RestoreCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RevokeCertificateCommand: (
  input: RevokeCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagCertificateAuthorityCommand: (
  input: TagCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagCertificateAuthorityCommand: (
  input: UntagCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateCertificateAuthorityCommand: (
  input: UpdateCertificateAuthorityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateCertificateAuthorityCommandOutput>;
export declare const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateCertificateAuthorityAuditReportCommandOutput>;
export declare const deserializeAws_json1_1CreatePermissionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreatePermissionCommandOutput>;
export declare const deserializeAws_json1_1DeleteCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteCertificateAuthorityCommandOutput>;
export declare const deserializeAws_json1_1DeletePermissionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeletePermissionCommandOutput>;
export declare const deserializeAws_json1_1DeletePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeletePolicyCommandOutput>;
export declare const deserializeAws_json1_1DescribeCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeCertificateAuthorityCommandOutput>;
export declare const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeCertificateAuthorityAuditReportCommandOutput>;
export declare const deserializeAws_json1_1GetCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCertificateCommandOutput>;
export declare const deserializeAws_json1_1GetCertificateAuthorityCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCertificateAuthorityCertificateCommandOutput>;
export declare const deserializeAws_json1_1GetCertificateAuthorityCsrCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCertificateAuthorityCsrCommandOutput>;
export declare const deserializeAws_json1_1GetPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetPolicyCommandOutput>;
export declare const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ImportCertificateAuthorityCertificateCommandOutput>;
export declare const deserializeAws_json1_1IssueCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<IssueCertificateCommandOutput>;
export declare const deserializeAws_json1_1ListCertificateAuthoritiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListCertificateAuthoritiesCommandOutput>;
export declare const deserializeAws_json1_1ListPermissionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPermissionsCommandOutput>;
export declare const deserializeAws_json1_1ListTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsCommandOutput>;
export declare const deserializeAws_json1_1PutPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutPolicyCommandOutput>;
export declare const deserializeAws_json1_1RestoreCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RestoreCertificateAuthorityCommandOutput>;
export declare const deserializeAws_json1_1RevokeCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RevokeCertificateCommandOutput>;
export declare const deserializeAws_json1_1TagCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagCertificateAuthorityCommandOutput>;
export declare const deserializeAws_json1_1UntagCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagCertificateAuthorityCommandOutput>;
export declare const deserializeAws_json1_1UpdateCertificateAuthorityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateCertificateAuthorityCommandOutput>;
