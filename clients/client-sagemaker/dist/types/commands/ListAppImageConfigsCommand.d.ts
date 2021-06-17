import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAppImageConfigsRequest, ListAppImageConfigsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAppImageConfigsCommandInput extends ListAppImageConfigsRequest {
}
export interface ListAppImageConfigsCommandOutput extends ListAppImageConfigsResponse, __MetadataBearer {
}
/**
 * <p>Lists the AppImageConfigs in your account and their properties. The list can be
 *         filtered by creation time or modified time, and whether the AppImageConfig name contains
 *         a specified string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAppImageConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAppImageConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListAppImageConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppImageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListAppImageConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAppImageConfigsCommand extends $Command<ListAppImageConfigsCommandInput, ListAppImageConfigsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListAppImageConfigsCommandInput;
    constructor(input: ListAppImageConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAppImageConfigsCommandInput, ListAppImageConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
