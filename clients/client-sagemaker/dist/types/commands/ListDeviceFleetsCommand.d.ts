import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListDeviceFleetsRequest, ListDeviceFleetsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeviceFleetsCommandInput extends ListDeviceFleetsRequest {
}
export interface ListDeviceFleetsCommandOutput extends ListDeviceFleetsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of devices in the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListDeviceFleetsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListDeviceFleetsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListDeviceFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceFleetsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceFleetsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeviceFleetsCommand extends $Command<ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListDeviceFleetsCommandInput;
    constructor(input: ListDeviceFleetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
