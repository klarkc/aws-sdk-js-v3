import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { PublishRecipeRequest, PublishRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PublishRecipeCommandInput extends PublishRecipeRequest {
}
export interface PublishRecipeCommandOutput extends PublishRecipeResponse, __MetadataBearer {
}
/**
 * <p>Publishes a new version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, PublishRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, PublishRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new PublishRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishRecipeCommandInput} for command's `input` shape.
 * @see {@link PublishRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PublishRecipeCommand extends $Command<PublishRecipeCommandInput, PublishRecipeCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: PublishRecipeCommandInput;
    constructor(input: PublishRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishRecipeCommandInput, PublishRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
