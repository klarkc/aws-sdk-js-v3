import { __extends } from "tslib";
import { ExecuteStatementInput, ExecuteStatementOutput } from "../models/models_0";
import { deserializeAws_json1_1ExecuteStatementCommand, serializeAws_json1_1ExecuteStatementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition
 *       language (DDL). This statement must be a single SQL statement.
 *       Depending on the authorization
 *       method, use one of the following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
 *          cluster identifier that matches the cluster in the secret. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
 *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
 *           operation is required to use this method. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ExecuteStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteStatementCommand = /** @class */ (function (_super) {
    __extends(ExecuteStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteStatementCommand(input) {
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
    ExecuteStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftDataClient";
        var commandName = "ExecuteStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteStatementInput.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteStatementOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ExecuteStatementCommand(input, context);
    };
    ExecuteStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ExecuteStatementCommand(output, context);
    };
    return ExecuteStatementCommand;
}($Command));
export { ExecuteStatementCommand };
//# sourceMappingURL=ExecuteStatementCommand.js.map