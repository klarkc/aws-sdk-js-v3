import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetGrantRequest, GetGrantResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGrantCommandInput extends GetGrantRequest {
}
export interface GetGrantCommandOutput extends GetGrantResponse, __MetadataBearer {
}
/**
 * <p>Gets detailed information about the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGrantCommandInput} for command's `input` shape.
 * @see {@link GetGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGrantCommand extends $Command<GetGrantCommandInput, GetGrantCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetGrantCommandInput;
    constructor(input: GetGrantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGrantCommandInput, GetGrantCommandOutput>;
    private serialize;
    private deserialize;
}
