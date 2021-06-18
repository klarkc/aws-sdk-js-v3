import { __extends } from "tslib";
import { GetTableMetadataInput, GetTableMetadataOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetTableMetadataCommand,
  serializeAws_json1_1GetTableMetadataCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns table metadata for the specified catalog, database, and table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetTableMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetTableMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetTableMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTableMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTableMetadataCommand = /** @class */ (function (_super) {
  __extends(GetTableMetadataCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetTableMetadataCommand(input) {
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
  GetTableMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetTableMetadataCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetTableMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTableMetadataOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetTableMetadataCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetTableMetadataCommand(input, context);
  };
  GetTableMetadataCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetTableMetadataCommand(output, context);
  };
  return GetTableMetadataCommand;
})($Command);
export { GetTableMetadataCommand };
//# sourceMappingURL=GetTableMetadataCommand.js.map
