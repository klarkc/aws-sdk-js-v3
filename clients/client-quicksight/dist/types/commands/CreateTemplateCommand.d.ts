import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateTemplateRequest, CreateTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTemplateCommandInput extends CreateTemplateRequest {
}
export interface CreateTemplateCommandOutput extends CreateTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a template from an existing QuickSight analysis or template. You can use the resulting
 * 			template to create a dashboard.</p>
 * 		       <p>A <i>template</i> is an entity in QuickSight that encapsulates the metadata
 * 			required to create an analysis and that you can use to create s dashboard. A template adds
 * 			a layer of abstraction by using placeholders to replace the dataset associated with the
 * 			analysis. You can use templates to create dashboards by replacing dataset placeholders
 * 			with datasets that follow the same schema that was used to create the source analysis
 * 			and template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTemplateCommand extends $Command<CreateTemplateCommandInput, CreateTemplateCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateTemplateCommandInput;
    constructor(input: CreateTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTemplateCommandInput, CreateTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
