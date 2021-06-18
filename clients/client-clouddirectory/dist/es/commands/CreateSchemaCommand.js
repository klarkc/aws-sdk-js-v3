import { __extends } from "tslib";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSchemaCommand,
  serializeAws_restJson1CreateSchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new schema in a development state. A schema can exist in three
 *       phases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Development:</i> This is a mutable phase of the schema. All new
 *           schemas are in the development phase. Once the schema is finalized, it can be
 *           published.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Published:</i> Published schemas are immutable and have a version
 *           associated with them.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Applied:</i> Applied schemas are mutable in a way that allows you
 *           to add new schema facets. You can also add new, nonrequired attributes to existing schema
 *           facets. You can apply only published schemas to directories. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
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
    var clientName = "CloudDirectoryClient";
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
    return serializeAws_restJson1CreateSchemaCommand(input, context);
  };
  CreateSchemaCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateSchemaCommand(output, context);
  };
  return CreateSchemaCommand;
})($Command);
export { CreateSchemaCommand };
//# sourceMappingURL=CreateSchemaCommand.js.map
