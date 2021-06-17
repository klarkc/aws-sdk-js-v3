import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { RejectGrantRequest, RejectGrantResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectGrantCommandInput extends RejectGrantRequest {
}
export interface RejectGrantCommandOutput extends RejectGrantResponse, __MetadataBearer {
}
/**
 * <p>Rejects the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, RejectGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, RejectGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new RejectGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectGrantCommandInput} for command's `input` shape.
 * @see {@link RejectGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectGrantCommand extends $Command<RejectGrantCommandInput, RejectGrantCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: RejectGrantCommandInput;
    constructor(input: RejectGrantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectGrantCommandInput, RejectGrantCommandOutput>;
    private serialize;
    private deserialize;
}
