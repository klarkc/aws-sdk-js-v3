import { __extends } from "tslib";
import { DescribeValidDBInstanceModificationsMessage, DescribeValidDBInstanceModificationsResult, } from "../models/models_1";
import { deserializeAws_queryDescribeValidDBInstanceModificationsCommand, serializeAws_queryDescribeValidDBInstanceModificationsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>You can call <code>DescribeValidDBInstanceModifications</code>
 *             to learn what modifications you can make to your DB instance.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeValidDBInstanceModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeValidDBInstanceModificationsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeValidDBInstanceModificationsCommand = /** @class */ (function (_super) {
    __extends(DescribeValidDBInstanceModificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeValidDBInstanceModificationsCommand(input) {
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
    DescribeValidDBInstanceModificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeValidDBInstanceModificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeValidDBInstanceModificationsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeValidDBInstanceModificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeValidDBInstanceModificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeValidDBInstanceModificationsCommand(input, context);
    };
    DescribeValidDBInstanceModificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeValidDBInstanceModificationsCommand(output, context);
    };
    return DescribeValidDBInstanceModificationsCommand;
}($Command));
export { DescribeValidDBInstanceModificationsCommand };
//# sourceMappingURL=DescribeValidDBInstanceModificationsCommand.js.map