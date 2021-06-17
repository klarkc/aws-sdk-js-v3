import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateNumberOfDomainControllersCommandInput extends UpdateNumberOfDomainControllersRequest {
}
export interface UpdateNumberOfDomainControllersCommandOutput extends UpdateNumberOfDomainControllersResult, __MetadataBearer {
}
/**
 * <p>Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateNumberOfDomainControllersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNumberOfDomainControllersCommandInput} for command's `input` shape.
 * @see {@link UpdateNumberOfDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateNumberOfDomainControllersCommand extends $Command<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateNumberOfDomainControllersCommandInput;
    constructor(input: UpdateNumberOfDomainControllersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput>;
    private serialize;
    private deserialize;
}
