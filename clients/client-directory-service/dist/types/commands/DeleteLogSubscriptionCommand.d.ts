import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteLogSubscriptionRequest, DeleteLogSubscriptionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLogSubscriptionCommandInput extends DeleteLogSubscriptionRequest {
}
export interface DeleteLogSubscriptionCommandOutput extends DeleteLogSubscriptionResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified log subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteLogSubscriptionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteLogSubscriptionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLogSubscriptionCommand extends $Command<DeleteLogSubscriptionCommandInput, DeleteLogSubscriptionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteLogSubscriptionCommandInput;
    constructor(input: DeleteLogSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogSubscriptionCommandInput, DeleteLogSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
