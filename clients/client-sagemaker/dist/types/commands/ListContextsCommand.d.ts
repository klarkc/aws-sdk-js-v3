import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListContextsRequest, ListContextsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContextsCommandInput extends ListContextsRequest {
}
export interface ListContextsCommandOutput extends ListContextsResponse, __MetadataBearer {
}
/**
 * <p>Lists the contexts in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListContextsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListContextsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListContextsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContextsCommandInput} for command's `input` shape.
 * @see {@link ListContextsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContextsCommand extends $Command<ListContextsCommandInput, ListContextsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListContextsCommandInput;
    constructor(input: ListContextsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContextsCommandInput, ListContextsCommandOutput>;
    private serialize;
    private deserialize;
}
