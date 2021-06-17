import { __extends } from "tslib";
import { ListSchemasRequest, ListSchemasResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSchemasCommand, serializeAws_json1_1ListSchemasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the schemas in a database.
 *       A token is returned to page through the schema list.
 *       Depending on the authorization method, use one of the
 *       following combinations of request parameters: </p>
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
 * import { RedshiftDataClient, ListSchemasCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListSchemasCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSchemasCommand = /** @class */ (function (_super) {
    __extends(ListSchemasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSchemasCommand(input) {
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
    ListSchemasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftDataClient";
        var commandName = "ListSchemasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchemasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchemasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchemasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSchemasCommand(input, context);
    };
    ListSchemasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSchemasCommand(output, context);
    };
    return ListSchemasCommand;
}($Command));
export { ListSchemasCommand };
//# sourceMappingURL=ListSchemasCommand.js.map