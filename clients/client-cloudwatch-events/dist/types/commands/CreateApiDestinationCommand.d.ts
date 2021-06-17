import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreateApiDestinationRequest, CreateApiDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateApiDestinationCommandInput extends CreateApiDestinationRequest {
}
export interface CreateApiDestinationCommandOutput extends CreateApiDestinationResponse, __MetadataBearer {
}
/**
 * <p>Creates an API destination, which is an HTTP invocation endpoint configured as a target
 *       for events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateApiDestinationCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateApiDestinationCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new CreateApiDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateApiDestinationCommand extends $Command<CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: CreateApiDestinationCommandInput;
    constructor(input: CreateApiDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
