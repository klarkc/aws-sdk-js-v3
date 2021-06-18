import { __extends } from "tslib";
import { CreateWorkGroupInput, CreateWorkGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWorkGroupCommand,
  serializeAws_json1_1CreateWorkGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a workgroup with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link CreateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkGroupCommand = /** @class */ (function (_super) {
  __extends(CreateWorkGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateWorkGroupCommand(input) {
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
  CreateWorkGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "CreateWorkGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateWorkGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkGroupOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateWorkGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateWorkGroupCommand(input, context);
  };
  CreateWorkGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateWorkGroupCommand(output, context);
  };
  return CreateWorkGroupCommand;
})($Command);
export { CreateWorkGroupCommand };
//# sourceMappingURL=CreateWorkGroupCommand.js.map
