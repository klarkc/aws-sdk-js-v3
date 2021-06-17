import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateSegmentRequest, CreateSegmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSegmentCommandInput extends CreateSegmentRequest {
}
export interface CreateSegmentCommandOutput extends CreateSegmentResponse, __MetadataBearer {
}
/**
 * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSegmentCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSegmentCommand extends $Command<CreateSegmentCommandInput, CreateSegmentCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateSegmentCommandInput;
    constructor(input: CreateSegmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSegmentCommandInput, CreateSegmentCommandOutput>;
    private serialize;
    private deserialize;
}
