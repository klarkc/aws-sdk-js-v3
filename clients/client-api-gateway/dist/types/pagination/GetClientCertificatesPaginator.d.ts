import {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "../commands/GetClientCertificatesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetClientCertificates(
  config: APIGatewayPaginationConfiguration,
  input: GetClientCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<GetClientCertificatesCommandOutput>;
