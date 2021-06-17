import { __extends } from "tslib";
import { ListRegistriesInput, ListRegistriesResponse } from "../models/models_1";
import { deserializeAws_json1_1ListRegistriesCommand, serializeAws_json1_1ListRegistriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListRegistriesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListRegistriesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRegistriesCommand = /** @class */ (function (_super) {
    __extends(ListRegistriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRegistriesCommand(input) {
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
    ListRegistriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ListRegistriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRegistriesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListRegistriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRegistriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRegistriesCommand(input, context);
    };
    ListRegistriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRegistriesCommand(output, context);
    };
    return ListRegistriesCommand;
}($Command));
export { ListRegistriesCommand };
//# sourceMappingURL=ListRegistriesCommand.js.map