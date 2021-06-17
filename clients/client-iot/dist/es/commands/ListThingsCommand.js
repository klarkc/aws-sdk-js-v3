import { __extends } from "tslib";
import { ListThingsRequest, ListThingsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingsCommand, serializeAws_restJson1ListThingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your things. Use the <b>attributeName</b> and
 * 				<b>attributeValue</b> parameters to filter your things.
 * 			For example, calling <code>ListThings</code> with attributeName=Color and
 * 			attributeValue=Red retrieves all things in the registry that contain an attribute
 * 				<b>Color</b> with the value <b>Red</b>. </p>
 * 		       <note>
 * 			         <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingsCommandInput} for command's `input` shape.
 * @see {@link ListThingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingsCommand = /** @class */ (function (_super) {
    __extends(ListThingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingsCommand(input) {
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
    ListThingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingsCommand(input, context);
    };
    ListThingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingsCommand(output, context);
    };
    return ListThingsCommand;
}($Command));
export { ListThingsCommand };
//# sourceMappingURL=ListThingsCommand.js.map