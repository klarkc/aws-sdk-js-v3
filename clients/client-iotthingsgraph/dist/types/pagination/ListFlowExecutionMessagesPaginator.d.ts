import { ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput } from "../commands/ListFlowExecutionMessagesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFlowExecutionMessages(config: IoTThingsGraphPaginationConfiguration, input: ListFlowExecutionMessagesCommandInput, ...additionalArguments: any): Paginator<ListFlowExecutionMessagesCommandOutput>;
