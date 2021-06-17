import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateGrantRequest, CreateGrantResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGrantCommandInput extends CreateGrantRequest {
}
export interface CreateGrantCommandOutput extends CreateGrantResponse, __MetadataBearer {
}
/**
 * <p>Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGrantCommandInput} for command's `input` shape.
 * @see {@link CreateGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGrantCommand extends $Command<CreateGrantCommandInput, CreateGrantCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CreateGrantCommandInput;
    constructor(input: CreateGrantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGrantCommandInput, CreateGrantCommandOutput>;
    private serialize;
    private deserialize;
}
