import { __extends } from "tslib";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSchemaCommand, serializeAws_json1_1CreateSchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create
 *       must be in Avro JSON format.</p>
 *          <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset
 *       type and has a set of required field and keywords.
 *       You specify a schema when you call <a>CreateDataset</a>.</p>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSchemas</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSchema</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSchema</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSchemaCommand = /** @class */ (function (_super) {
    __extends(CreateSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSchemaCommand(input) {
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
    CreateSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSchemaCommand(input, context);
    };
    CreateSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSchemaCommand(output, context);
    };
    return CreateSchemaCommand;
}($Command));
export { CreateSchemaCommand };
//# sourceMappingURL=CreateSchemaCommand.js.map