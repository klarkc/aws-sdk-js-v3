import { ListOutgoingCertificatesCommandInput, ListOutgoingCertificatesCommandOutput } from "../commands/ListOutgoingCertificatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOutgoingCertificates(config: IoTPaginationConfiguration, input: ListOutgoingCertificatesCommandInput, ...additionalArguments: any): Paginator<ListOutgoingCertificatesCommandOutput>;
