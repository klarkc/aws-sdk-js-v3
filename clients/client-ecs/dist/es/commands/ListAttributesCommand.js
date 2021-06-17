import { __extends } from "tslib";
import { ListAttributesRequest, ListAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAttributesCommand, serializeAws_json1_1ListAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListAttributesCommand = /** @class */ (function (_super) {
    __extends(ListAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAttributesCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ListAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAttributesCommand(input, context);
    };
    ListAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAttributesCommand(output, context);
    };
    return ListAttributesCommand;
}($Command));
export { ListAttributesCommand };
//# sourceMappingURL=ListAttributesCommand.js.map