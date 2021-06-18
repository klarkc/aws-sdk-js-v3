import {
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput,
} from "../commands/AddTagsToCertificateCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "../commands/DescribeCertificateCommand";
import { ExportCertificateCommandInput, ExportCertificateCommandOutput } from "../commands/ExportCertificateCommand";
import {
  GetAccountConfigurationCommandInput,
  GetAccountConfigurationCommandOutput,
} from "../commands/GetAccountConfigurationCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "../commands/GetCertificateCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "../commands/ImportCertificateCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import {
  ListTagsForCertificateCommandInput,
  ListTagsForCertificateCommandOutput,
} from "../commands/ListTagsForCertificateCommand";
import {
  PutAccountConfigurationCommandInput,
  PutAccountConfigurationCommandOutput,
} from "../commands/PutAccountConfigurationCommand";
import {
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput,
} from "../commands/RemoveTagsFromCertificateCommand";
import { RenewCertificateCommandInput, RenewCertificateCommandOutput } from "../commands/RenewCertificateCommand";
import { RequestCertificateCommandInput, RequestCertificateCommandOutput } from "../commands/RequestCertificateCommand";
import {
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput,
} from "../commands/ResendValidationEmailCommand";
import {
  UpdateCertificateOptionsCommandInput,
  UpdateCertificateOptionsCommandOutput,
} from "../commands/UpdateCertificateOptionsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AddTagsToCertificateCommand: (
  input: AddTagsToCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteCertificateCommand: (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeCertificateCommand: (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ExportCertificateCommand: (
  input: ExportCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetAccountConfigurationCommand: (
  input: GetAccountConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetCertificateCommand: (
  input: GetCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ImportCertificateCommand: (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListCertificatesCommand: (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForCertificateCommand: (
  input: ListTagsForCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutAccountConfigurationCommand: (
  input: PutAccountConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RemoveTagsFromCertificateCommand: (
  input: RemoveTagsFromCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RenewCertificateCommand: (
  input: RenewCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RequestCertificateCommand: (
  input: RequestCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ResendValidationEmailCommand: (
  input: ResendValidationEmailCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateCertificateOptionsCommand: (
  input: UpdateCertificateOptionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AddTagsToCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddTagsToCertificateCommandOutput>;
export declare const deserializeAws_json1_1DeleteCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteCertificateCommandOutput>;
export declare const deserializeAws_json1_1DescribeCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeCertificateCommandOutput>;
export declare const deserializeAws_json1_1ExportCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExportCertificateCommandOutput>;
export declare const deserializeAws_json1_1GetAccountConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccountConfigurationCommandOutput>;
export declare const deserializeAws_json1_1GetCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCertificateCommandOutput>;
export declare const deserializeAws_json1_1ImportCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ImportCertificateCommandOutput>;
export declare const deserializeAws_json1_1ListCertificatesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListCertificatesCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForCertificateCommandOutput>;
export declare const deserializeAws_json1_1PutAccountConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutAccountConfigurationCommandOutput>;
export declare const deserializeAws_json1_1RemoveTagsFromCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveTagsFromCertificateCommandOutput>;
export declare const deserializeAws_json1_1RenewCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RenewCertificateCommandOutput>;
export declare const deserializeAws_json1_1RequestCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RequestCertificateCommandOutput>;
export declare const deserializeAws_json1_1ResendValidationEmailCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResendValidationEmailCommandOutput>;
export declare const deserializeAws_json1_1UpdateCertificateOptionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateCertificateOptionsCommandOutput>;
