import { __extends } from "tslib";
import { ListResourcesRequest, ListResourcesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourcesCommand, serializeAws_json1_1ListResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resources registered to be managed by the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListResourcesCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListResourcesCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourcesCommand = /** @class */ (function (_super) {
    __extends(ListResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourcesCommand(input) {
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
    ListResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "ListResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourcesCommand(input, context);
    };
    ListResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourcesCommand(output, context);
    };
    return ListResourcesCommand;
}($Command));
export { ListResourcesCommand };
//# sourceMappingURL=ListResourcesCommand.js.map