import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateInstanceRequest, CreateInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInstanceCommandInput extends CreateInstanceRequest {
}
export interface CreateInstanceCommandOutput extends CreateInstanceResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any
 *    storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not
 *    allow for any configurations on features, such as Contact Lens for Amazon Connect. </p>
 *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
 * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
 * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInstanceCommand extends $Command<CreateInstanceCommandInput, CreateInstanceCommandOutput, ConnectClientResolvedConfig> {
    readonly input: CreateInstanceCommandInput;
    constructor(input: CreateInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceCommandInput, CreateInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
