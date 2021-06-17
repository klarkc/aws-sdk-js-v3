import { __extends } from "tslib";
import { ListImagePackagesRequest, ListImagePackagesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImagePackagesCommand, serializeAws_restJson1ListImagePackagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the Packages that are associated with an Image Build Version, as determined by AWS Systems Manager Inventory at build time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePackagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePackagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagePackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagePackagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePackagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImagePackagesCommand = /** @class */ (function (_super) {
    __extends(ListImagePackagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImagePackagesCommand(input) {
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
    ListImagePackagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListImagePackagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImagePackagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImagePackagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImagePackagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImagePackagesCommand(input, context);
    };
    ListImagePackagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImagePackagesCommand(output, context);
    };
    return ListImagePackagesCommand;
}($Command));
export { ListImagePackagesCommand };
//# sourceMappingURL=ListImagePackagesCommand.js.map