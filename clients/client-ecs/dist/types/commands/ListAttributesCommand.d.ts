import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAttributesRequest, ListAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAttributesCommandInput extends ListAttributesRequest {
}
export interface ListAttributesCommandOutput extends ListAttributesResponse, __MetadataBearer {
}
/**
 * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
 * 			When you specify a target type and cluster, <code>ListAttributes</code> returns a list
 * 			of attribute objects, one for each attribute on each resource. You can filter the list
 * 			of results to a single attribute name to only return results that have that name. You
 * 			can also filter the results by attribute name and value, for example, to see which
 * 			container instances in a cluster are running a Linux AMI
 * 			(<code>ecs.os-type=linux</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttributesCommandInput} for command's `input` shape.
 * @see {@link ListAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttributesCommand extends $Command<ListAttributesCommandInput, ListAttributesCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListAttributesCommandInput;
    constructor(input: ListAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttributesCommandInput, ListAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
