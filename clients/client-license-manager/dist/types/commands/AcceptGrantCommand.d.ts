import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { AcceptGrantRequest, AcceptGrantResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptGrantCommandInput extends AcceptGrantRequest {
}
export interface AcceptGrantCommandOutput extends AcceptGrantResponse, __MetadataBearer {
}
/**
 * <p>Accepts the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, AcceptGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, AcceptGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new AcceptGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptGrantCommandInput} for command's `input` shape.
 * @see {@link AcceptGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptGrantCommand extends $Command<AcceptGrantCommandInput, AcceptGrantCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: AcceptGrantCommandInput;
    constructor(input: AcceptGrantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptGrantCommandInput, AcceptGrantCommandOutput>;
    private serialize;
    private deserialize;
}
