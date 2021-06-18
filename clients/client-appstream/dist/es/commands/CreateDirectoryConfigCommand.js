import { __extends } from "tslib";
import { CreateDirectoryConfigRequest, CreateDirectoryConfigResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDirectoryConfigCommand,
  serializeAws_json1_1CreateDirectoryConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDirectoryConfigCommand = /** @class */ (function (_super) {
  __extends(CreateDirectoryConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDirectoryConfigCommand(input) {
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
  CreateDirectoryConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateDirectoryConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDirectoryConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectoryConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDirectoryConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateDirectoryConfigCommand(input, context);
  };
  CreateDirectoryConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateDirectoryConfigCommand(output, context);
  };
  return CreateDirectoryConfigCommand;
})($Command);
export { CreateDirectoryConfigCommand };
//# sourceMappingURL=CreateDirectoryConfigCommand.js.map
