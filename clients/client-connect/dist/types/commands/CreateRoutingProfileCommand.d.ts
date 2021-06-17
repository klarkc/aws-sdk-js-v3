import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateRoutingProfileRequest, CreateRoutingProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRoutingProfileCommandInput extends CreateRoutingProfileRequest {
}
export interface CreateRoutingProfileCommandOutput extends CreateRoutingProfileResponse, __MetadataBearer {
}
/**
 * <p>Creates a new routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link CreateRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRoutingProfileCommand extends $Command<CreateRoutingProfileCommandInput, CreateRoutingProfileCommandOutput, ConnectClientResolvedConfig> {
    readonly input: CreateRoutingProfileCommandInput;
    constructor(input: CreateRoutingProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRoutingProfileCommandInput, CreateRoutingProfileCommandOutput>;
    private serialize;
    private deserialize;
}
