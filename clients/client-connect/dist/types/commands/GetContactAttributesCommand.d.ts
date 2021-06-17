import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { GetContactAttributesRequest, GetContactAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContactAttributesCommandInput extends GetContactAttributesRequest {
}
export interface GetContactAttributesCommandOutput extends GetContactAttributesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the contact attributes for the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetContactAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetContactAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetContactAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactAttributesCommandInput} for command's `input` shape.
 * @see {@link GetContactAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContactAttributesCommand extends $Command<GetContactAttributesCommandInput, GetContactAttributesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: GetContactAttributesCommandInput;
    constructor(input: GetContactAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContactAttributesCommandInput, GetContactAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
